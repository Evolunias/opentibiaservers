import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-low-exp-server-france');
}

export default function ThaisotLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thaisot-low-exp-server-france" />;
}
