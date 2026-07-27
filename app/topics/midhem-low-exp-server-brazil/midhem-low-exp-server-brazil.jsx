import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-low-exp-server-brazil');
}

export default function MidhemLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="midhem-low-exp-server-brazil" />;
}
