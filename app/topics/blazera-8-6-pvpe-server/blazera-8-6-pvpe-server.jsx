import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-6-pvpe-server');
}

export default function Blazera86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-6-pvpe-server" />;
}
