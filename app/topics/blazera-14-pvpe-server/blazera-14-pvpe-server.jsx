import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-14-pvpe-server');
}

export default function Blazera14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-14-pvpe-server" />;
}
