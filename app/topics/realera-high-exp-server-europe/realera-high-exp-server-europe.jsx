import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-high-exp-server-europe');
}

export default function RealeraHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realera-high-exp-server-europe" />;
}
