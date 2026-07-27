import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-baiak-tibia-private-server');
}

export default function Tibia13BaiakTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-baiak-tibia-private-server" />;
}
