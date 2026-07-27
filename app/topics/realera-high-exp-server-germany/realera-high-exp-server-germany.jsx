import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-high-exp-server-germany');
}

export default function RealeraHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realera-high-exp-server-germany" />;
}
