import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-wars');
}

export default function NilotWarsKeywordPage() {
  return <StaticKeywordPage slug="nilot-wars" />;
}
