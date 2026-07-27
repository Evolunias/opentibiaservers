import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-fresh-start-server-brazil');
}

export default function NilotFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nilot-fresh-start-server-brazil" />;
}
