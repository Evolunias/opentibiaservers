import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-1-pvpe-server');
}

export default function Blazera71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-1-pvpe-server" />;
}
