import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-high-exp-server-usa');
}

export default function NilotHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nilot-high-exp-server-usa" />;
}
