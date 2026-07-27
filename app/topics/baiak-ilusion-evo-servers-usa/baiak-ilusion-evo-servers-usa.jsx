import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-evo-servers-usa');
}

export default function BaiakIlusionEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-evo-servers-usa" />;
}
