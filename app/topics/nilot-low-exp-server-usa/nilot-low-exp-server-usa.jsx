import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-low-exp-server-usa');
}

export default function NilotLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nilot-low-exp-server-usa" />;
}
