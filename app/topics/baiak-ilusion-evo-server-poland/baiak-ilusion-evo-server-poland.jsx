import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-evo-server-poland');
}

export default function BaiakIlusionEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-evo-server-poland" />;
}
