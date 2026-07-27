import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-baiak-tibia-private-server');
}

export default function Tibia15BaiakTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-baiak-tibia-private-server" />;
}
