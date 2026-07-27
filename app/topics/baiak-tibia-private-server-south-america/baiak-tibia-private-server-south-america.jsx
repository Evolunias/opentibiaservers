import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-tibia-private-server-south-america');
}

export default function BaiakTibiaPrivateServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-tibia-private-server-south-america" />;
}
