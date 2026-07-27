import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-evo-server-usa');
}

export default function BaiakIlusionEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-evo-server-usa" />;
}
