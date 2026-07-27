import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-10-0-old-school-server');
}

export default function Evolera100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-10-0-old-school-server" />;
}
