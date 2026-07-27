import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-evo-server-uk');
}

export default function BaiakIlusionEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-evo-server-uk" />;
}
