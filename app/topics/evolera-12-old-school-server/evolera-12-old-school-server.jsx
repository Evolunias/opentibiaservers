import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-12-old-school-server');
}

export default function Evolera12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-12-old-school-server" />;
}
