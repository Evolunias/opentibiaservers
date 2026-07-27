import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-spells');
}

export default function HarmoniaOtSpellsKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-spells" />;
}
