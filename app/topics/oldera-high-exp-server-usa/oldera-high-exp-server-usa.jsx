import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-high-exp-server-usa');
}

export default function OlderaHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oldera-high-exp-server-usa" />;
}
