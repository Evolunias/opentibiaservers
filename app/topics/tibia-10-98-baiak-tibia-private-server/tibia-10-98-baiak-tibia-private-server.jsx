import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-baiak-tibia-private-server');
}

export default function Tibia1098BaiakTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-baiak-tibia-private-server" />;
}
