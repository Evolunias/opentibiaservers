import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-tibia-private-server-latin-america');
}

export default function BaiakTibiaPrivateServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-tibia-private-server-latin-america" />;
}
