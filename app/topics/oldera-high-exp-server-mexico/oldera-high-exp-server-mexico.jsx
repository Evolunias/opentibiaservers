import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-high-exp-server-mexico');
}

export default function OlderaHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oldera-high-exp-server-mexico" />;
}
