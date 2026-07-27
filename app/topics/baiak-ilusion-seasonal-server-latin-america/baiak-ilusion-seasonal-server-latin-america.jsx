import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-seasonal-server-latin-america');
}

export default function BaiakIlusionSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-seasonal-server-latin-america" />;
}
