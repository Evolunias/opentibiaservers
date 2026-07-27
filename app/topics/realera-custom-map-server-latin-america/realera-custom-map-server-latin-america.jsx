import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-custom-map-server-latin-america');
}

export default function RealeraCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-custom-map-server-latin-america" />;
}
