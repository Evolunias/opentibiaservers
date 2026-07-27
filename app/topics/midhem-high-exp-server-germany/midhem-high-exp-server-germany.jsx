import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-high-exp-server-germany');
}

export default function MidhemHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="midhem-high-exp-server-germany" />;
}
