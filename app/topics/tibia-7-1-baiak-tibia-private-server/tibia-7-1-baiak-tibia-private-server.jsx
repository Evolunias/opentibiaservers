import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-baiak-tibia-private-server');
}

export default function Tibia71BaiakTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-baiak-tibia-private-server" />;
}
