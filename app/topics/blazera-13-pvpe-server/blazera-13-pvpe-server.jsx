import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-13-pvpe-server');
}

export default function Blazera13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-13-pvpe-server" />;
}
