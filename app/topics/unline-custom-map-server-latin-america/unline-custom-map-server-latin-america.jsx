import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-custom-map-server-latin-america');
}

export default function UnlineCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-custom-map-server-latin-america" />;
}
