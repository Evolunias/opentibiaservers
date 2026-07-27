import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-baiak-tibia-private-server');
}

export default function Tibia74BaiakTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-baiak-tibia-private-server" />;
}
