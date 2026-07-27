import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-map');
}

export default function NilotMapKeywordPage() {
  return <StaticKeywordPage slug="nilot-map" />;
}
