import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-high-exp-server-usa');
}

export default function RealeraHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realera-high-exp-server-usa" />;
}
