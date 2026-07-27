import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-low-exp-server-uk');
}

export default function NilotLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="nilot-low-exp-server-uk" />;
}
