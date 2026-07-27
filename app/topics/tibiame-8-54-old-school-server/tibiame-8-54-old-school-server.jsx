import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-54-old-school-server');
}

export default function Tibiame854OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-54-old-school-server" />;
}
