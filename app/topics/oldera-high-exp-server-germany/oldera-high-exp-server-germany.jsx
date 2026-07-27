import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-high-exp-server-germany');
}

export default function OlderaHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oldera-high-exp-server-germany" />;
}
