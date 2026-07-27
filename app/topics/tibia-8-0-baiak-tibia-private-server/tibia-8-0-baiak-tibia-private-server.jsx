import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-baiak-tibia-private-server');
}

export default function Tibia80BaiakTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-baiak-tibia-private-server" />;
}
