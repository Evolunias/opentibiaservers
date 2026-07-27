import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-high-exp-server-poland');
}

export default function NilotHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nilot-high-exp-server-poland" />;
}
