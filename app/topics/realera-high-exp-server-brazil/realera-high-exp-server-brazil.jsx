import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-high-exp-server-brazil');
}

export default function RealeraHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realera-high-exp-server-brazil" />;
}
