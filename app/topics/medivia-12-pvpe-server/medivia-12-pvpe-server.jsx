import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-12-pvpe-server');
}

export default function Medivia12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-12-pvpe-server" />;
}
