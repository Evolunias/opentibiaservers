import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-wiki-france');
}

export default function PvpWikiFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-wiki-france" />;
}
