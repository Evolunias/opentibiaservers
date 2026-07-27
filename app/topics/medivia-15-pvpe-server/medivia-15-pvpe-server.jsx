import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-15-pvpe-server');
}

export default function Medivia15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-15-pvpe-server" />;
}
