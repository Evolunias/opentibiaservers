import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-high-exp-server-poland');
}

export default function OlderaHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oldera-high-exp-server-poland" />;
}
