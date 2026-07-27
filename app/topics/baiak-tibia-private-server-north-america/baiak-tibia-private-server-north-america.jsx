import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-tibia-private-server-north-america');
}

export default function BaiakTibiaPrivateServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-tibia-private-server-north-america" />;
}
