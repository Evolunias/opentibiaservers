import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-evo-server-europe');
}

export default function BaiakIlusionEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-evo-server-europe" />;
}
