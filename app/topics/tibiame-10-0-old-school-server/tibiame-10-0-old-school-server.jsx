import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-0-old-school-server');
}

export default function Tibiame100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-0-old-school-server" />;
}
