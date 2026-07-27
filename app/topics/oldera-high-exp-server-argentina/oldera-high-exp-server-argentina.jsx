import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-high-exp-server-argentina');
}

export default function OlderaHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oldera-high-exp-server-argentina" />;
}
