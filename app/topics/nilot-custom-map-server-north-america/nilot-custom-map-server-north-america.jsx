import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-custom-map-server-north-america');
}

export default function NilotCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-custom-map-server-north-america" />;
}
