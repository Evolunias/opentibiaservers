import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-9-6-pvpe-server');
}

export default function Blazera96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-9-6-pvpe-server" />;
}
