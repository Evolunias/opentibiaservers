import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-evo-server-brazil');
}

export default function BaiakIlusionEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-evo-server-brazil" />;
}
