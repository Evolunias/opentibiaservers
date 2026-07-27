import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-tibia-private-server-usa');
}

export default function BaiakTibiaPrivateServerUsaKeywordPage() {
  return <StaticKeywordPage slug="baiak-tibia-private-server-usa" />;
}
