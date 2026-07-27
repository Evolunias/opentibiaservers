import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-low-exp-server-poland');
}

export default function MidhemLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="midhem-low-exp-server-poland" />;
}
