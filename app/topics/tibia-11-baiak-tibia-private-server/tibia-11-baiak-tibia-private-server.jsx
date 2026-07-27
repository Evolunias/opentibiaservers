import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-baiak-tibia-private-server');
}

export default function Tibia11BaiakTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-baiak-tibia-private-server" />;
}
