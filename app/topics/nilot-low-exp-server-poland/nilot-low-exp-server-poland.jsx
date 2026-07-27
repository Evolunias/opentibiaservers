import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-low-exp-server-poland');
}

export default function NilotLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nilot-low-exp-server-poland" />;
}
