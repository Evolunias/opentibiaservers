import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-status-france');
}

export default function EvoStatusFranceKeywordPage() {
  return <StaticKeywordPage slug="evo-status-france" />;
}
