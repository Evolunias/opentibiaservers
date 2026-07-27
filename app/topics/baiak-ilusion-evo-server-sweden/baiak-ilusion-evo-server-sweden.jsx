import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-evo-server-sweden');
}

export default function BaiakIlusionEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-evo-server-sweden" />;
}
