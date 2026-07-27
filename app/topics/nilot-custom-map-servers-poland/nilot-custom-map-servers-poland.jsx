import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-custom-map-servers-poland');
}

export default function NilotCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="nilot-custom-map-servers-poland" />;
}
