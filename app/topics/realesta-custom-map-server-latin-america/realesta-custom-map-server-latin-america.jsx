import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-custom-map-server-latin-america');
}

export default function RealestaCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-custom-map-server-latin-america" />;
}
