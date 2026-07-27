import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-custom-map-servers-latin-america');
}

export default function TibianusCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-custom-map-servers-latin-america" />;
}
