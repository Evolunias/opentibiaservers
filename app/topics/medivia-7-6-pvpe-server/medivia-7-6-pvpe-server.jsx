import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-6-pvpe-server');
}

export default function Medivia76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-6-pvpe-server" />;
}
