import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-guide-france');
}

export default function EvoGuideFranceKeywordPage() {
  return <StaticKeywordPage slug="evo-guide-france" />;
}
