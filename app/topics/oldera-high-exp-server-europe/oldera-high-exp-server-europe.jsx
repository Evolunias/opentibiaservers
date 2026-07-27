import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-high-exp-server-europe');
}

export default function OlderaHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oldera-high-exp-server-europe" />;
}
