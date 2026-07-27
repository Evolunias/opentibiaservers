import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-11-pvpe-server');
}

export default function Medivia11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-11-pvpe-server" />;
}
