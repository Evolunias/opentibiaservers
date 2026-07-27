import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-spells');
}

export default function NoxiousotSpellsKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-spells" />;
}
