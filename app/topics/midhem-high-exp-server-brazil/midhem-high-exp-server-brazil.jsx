import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-high-exp-server-brazil');
}

export default function MidhemHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="midhem-high-exp-server-brazil" />;
}
