import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-evo-server-argentina');
}

export default function BaiakIlusionEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-evo-server-argentina" />;
}
