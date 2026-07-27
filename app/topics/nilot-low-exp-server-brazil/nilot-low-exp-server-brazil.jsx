import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-low-exp-server-brazil');
}

export default function NilotLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nilot-low-exp-server-brazil" />;
}
