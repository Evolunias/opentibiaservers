import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-custom-map-servers-mexico');
}

export default function TibianusCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibianus-custom-map-servers-mexico" />;
}
