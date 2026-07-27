import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-high-exp-server-france');
}

export default function ThaisotHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thaisot-high-exp-server-france" />;
}
