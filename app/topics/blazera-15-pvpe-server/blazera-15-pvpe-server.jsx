import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-15-pvpe-server');
}

export default function Blazera15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-15-pvpe-server" />;
}
