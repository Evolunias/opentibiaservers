import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-spells');
}

export default function OtmadnessSpellsKeywordPage() {
  return <StaticKeywordPage slug="otmadness-spells" />;
}
