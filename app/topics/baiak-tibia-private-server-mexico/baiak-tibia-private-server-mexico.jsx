import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-tibia-private-server-mexico');
}

export default function BaiakTibiaPrivateServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="baiak-tibia-private-server-mexico" />;
}
