import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-low-exp-server-germany');
}

export default function MidhemLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="midhem-low-exp-server-germany" />;
}
