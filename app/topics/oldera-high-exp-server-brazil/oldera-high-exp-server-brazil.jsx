import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-high-exp-server-brazil');
}

export default function OlderaHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oldera-high-exp-server-brazil" />;
}
