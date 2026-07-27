import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-high-exp-server-poland');
}

export default function RealeraHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realera-high-exp-server-poland" />;
}
