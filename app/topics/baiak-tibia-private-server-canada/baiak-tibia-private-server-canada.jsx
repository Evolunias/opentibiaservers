import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-tibia-private-server-canada');
}

export default function BaiakTibiaPrivateServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="baiak-tibia-private-server-canada" />;
}
