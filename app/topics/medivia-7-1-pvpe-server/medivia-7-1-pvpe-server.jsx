import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-1-pvpe-server');
}

export default function Medivia71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-1-pvpe-server" />;
}
