import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-high-exp-server-mexico');
}

export default function RealeraHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realera-high-exp-server-mexico" />;
}
