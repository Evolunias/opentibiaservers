import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-high-exp-server-argentina');
}

export default function RealeraHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realera-high-exp-server-argentina" />;
}
