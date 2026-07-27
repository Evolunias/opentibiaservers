import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-evo-servers-brazil');
}

export default function BaiakIlusionEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-evo-servers-brazil" />;
}
