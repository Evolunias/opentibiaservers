import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-evo-server-north-america');
}

export default function BaiakIlusionEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-evo-server-north-america" />;
}
