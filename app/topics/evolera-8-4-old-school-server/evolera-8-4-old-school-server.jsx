import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-4-old-school-server');
}

export default function Evolera84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-4-old-school-server" />;
}
