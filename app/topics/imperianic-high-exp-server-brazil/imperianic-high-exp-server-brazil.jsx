import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-high-exp-server-brazil');
}

export default function ImperianicHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="imperianic-high-exp-server-brazil" />;
}
