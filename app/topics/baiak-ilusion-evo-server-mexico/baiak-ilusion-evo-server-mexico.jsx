import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-evo-server-mexico');
}

export default function BaiakIlusionEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-evo-server-mexico" />;
}
