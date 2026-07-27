import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-baiak-tibia-private-server');
}

export default function Tibia12BaiakTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-baiak-tibia-private-server" />;
}
