import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-wiki-canada');
}

export default function PvpEnforcedWikiCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-wiki-canada" />;
}
