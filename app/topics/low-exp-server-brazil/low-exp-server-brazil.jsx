import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-server-brazil');
}

export default function LowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="low-exp-server-brazil" />;
}
