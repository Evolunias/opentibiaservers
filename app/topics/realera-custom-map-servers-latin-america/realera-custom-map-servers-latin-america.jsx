import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-custom-map-servers-latin-america');
}

export default function RealeraCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-custom-map-servers-latin-america" />;
}
