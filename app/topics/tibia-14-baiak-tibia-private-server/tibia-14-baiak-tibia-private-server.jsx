import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-baiak-tibia-private-server');
}

export default function Tibia14BaiakTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-baiak-tibia-private-server" />;
}
