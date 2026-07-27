import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-high-exp-server-brazil');
}

export default function RealestaHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realesta-high-exp-server-brazil" />;
}
