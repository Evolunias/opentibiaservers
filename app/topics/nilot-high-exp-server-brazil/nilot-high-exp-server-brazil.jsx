import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-high-exp-server-brazil');
}

export default function NilotHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nilot-high-exp-server-brazil" />;
}
