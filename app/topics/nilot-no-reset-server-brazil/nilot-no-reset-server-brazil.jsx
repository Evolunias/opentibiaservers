import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-no-reset-server-brazil');
}

export default function NilotNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nilot-no-reset-server-brazil" />;
}
