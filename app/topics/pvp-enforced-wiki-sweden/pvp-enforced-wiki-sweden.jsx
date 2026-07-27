import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-wiki-sweden');
}

export default function PvpEnforcedWikiSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-wiki-sweden" />;
}
