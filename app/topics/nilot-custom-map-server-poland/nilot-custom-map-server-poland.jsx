import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-custom-map-server-poland');
}

export default function NilotCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nilot-custom-map-server-poland" />;
}
