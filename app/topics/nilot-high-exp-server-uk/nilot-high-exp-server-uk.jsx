import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-high-exp-server-uk');
}

export default function NilotHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="nilot-high-exp-server-uk" />;
}
