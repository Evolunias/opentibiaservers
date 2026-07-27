import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-custom-map-servers-south-america');
}

export default function NilotCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-custom-map-servers-south-america" />;
}
