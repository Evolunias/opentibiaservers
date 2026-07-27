import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-wiki-france');
}

export default function PvpEnforcedWikiFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-wiki-france" />;
}
