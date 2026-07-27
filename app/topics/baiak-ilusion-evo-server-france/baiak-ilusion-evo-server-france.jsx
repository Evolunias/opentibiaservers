import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-evo-server-france');
}

export default function BaiakIlusionEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-evo-server-france" />;
}
