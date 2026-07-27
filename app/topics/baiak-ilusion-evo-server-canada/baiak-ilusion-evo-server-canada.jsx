import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-evo-server-canada');
}

export default function BaiakIlusionEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-evo-server-canada" />;
}
