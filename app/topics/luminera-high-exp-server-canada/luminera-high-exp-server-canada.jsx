import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-high-exp-server-canada');
}

export default function LumineraHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="luminera-high-exp-server-canada" />;
}
