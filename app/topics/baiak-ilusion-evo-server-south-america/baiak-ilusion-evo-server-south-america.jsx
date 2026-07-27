import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-evo-server-south-america');
}

export default function BaiakIlusionEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-evo-server-south-america" />;
}
