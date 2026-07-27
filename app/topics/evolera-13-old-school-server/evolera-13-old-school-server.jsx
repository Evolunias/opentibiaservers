import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-13-old-school-server');
}

export default function Evolera13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-13-old-school-server" />;
}
