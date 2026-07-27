import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-10-98-old-school-server');
}

export default function Evolera1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-10-98-old-school-server" />;
}
