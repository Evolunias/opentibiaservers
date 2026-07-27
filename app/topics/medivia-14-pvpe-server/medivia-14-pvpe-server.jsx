import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-14-pvpe-server');
}

export default function Medivia14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-14-pvpe-server" />;
}
