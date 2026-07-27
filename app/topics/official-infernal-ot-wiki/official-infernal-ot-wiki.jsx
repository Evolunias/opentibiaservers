import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-infernal-ot-wiki');
}

export default function OfficialInfernalOtWikiKeywordPage() {
  return <StaticKeywordPage slug="official-infernal-ot-wiki" />;
}
