import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-6-pvpe-server');
}

export default function Blazera76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-6-pvpe-server" />;
}
