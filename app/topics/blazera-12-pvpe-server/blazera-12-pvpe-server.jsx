import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-12-pvpe-server');
}

export default function Blazera12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-12-pvpe-server" />;
}
