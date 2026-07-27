import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-98-old-school-server');
}

export default function Tibiame1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-98-old-school-server" />;
}
