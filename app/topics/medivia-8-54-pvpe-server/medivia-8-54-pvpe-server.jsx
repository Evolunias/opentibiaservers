import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-54-pvpe-server');
}

export default function Medivia854PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-54-pvpe-server" />;
}
