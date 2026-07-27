import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-high-exp-server-uk');
}

export default function OlderaHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="oldera-high-exp-server-uk" />;
}
