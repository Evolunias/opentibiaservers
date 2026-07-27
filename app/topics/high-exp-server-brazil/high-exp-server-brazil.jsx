import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-server-brazil');
}

export default function HighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="high-exp-server-brazil" />;
}
