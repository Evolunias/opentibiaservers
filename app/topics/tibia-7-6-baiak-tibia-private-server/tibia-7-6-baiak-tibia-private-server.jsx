import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-baiak-tibia-private-server');
}

export default function Tibia76BaiakTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-baiak-tibia-private-server" />;
}
