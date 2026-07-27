import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-9-6-old-school-server');
}

export default function Tibiame96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-9-6-old-school-server" />;
}
