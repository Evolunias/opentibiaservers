import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-high-exp-server-poland');
}

export default function MidhemHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="midhem-high-exp-server-poland" />;
}
