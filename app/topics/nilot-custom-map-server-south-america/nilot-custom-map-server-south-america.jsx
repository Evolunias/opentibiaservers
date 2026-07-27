import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-custom-map-server-south-america');
}

export default function NilotCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-custom-map-server-south-america" />;
}
