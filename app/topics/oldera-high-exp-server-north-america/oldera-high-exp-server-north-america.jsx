import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-high-exp-server-north-america');
}

export default function OlderaHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-high-exp-server-north-america" />;
}
