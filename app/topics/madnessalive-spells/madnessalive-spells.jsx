import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-spells');
}

export default function MadnessaliveSpellsKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-spells" />;
}
