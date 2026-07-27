import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-high-exp-server-france');
}

export default function RealeraHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realera-high-exp-server-france" />;
}
