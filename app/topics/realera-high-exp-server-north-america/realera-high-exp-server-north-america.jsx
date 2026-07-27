import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-high-exp-server-north-america');
}

export default function RealeraHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-high-exp-server-north-america" />;
}
