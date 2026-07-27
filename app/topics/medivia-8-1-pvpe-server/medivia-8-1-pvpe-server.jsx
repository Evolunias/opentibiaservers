import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-1-pvpe-server');
}

export default function Medivia81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-1-pvpe-server" />;
}
