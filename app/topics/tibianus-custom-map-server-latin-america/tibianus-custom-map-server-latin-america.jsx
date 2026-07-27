import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-custom-map-server-latin-america');
}

export default function TibianusCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-custom-map-server-latin-america" />;
}
