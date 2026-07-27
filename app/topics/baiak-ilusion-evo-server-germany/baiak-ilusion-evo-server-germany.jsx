import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-evo-server-germany');
}

export default function BaiakIlusionEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-evo-server-germany" />;
}
