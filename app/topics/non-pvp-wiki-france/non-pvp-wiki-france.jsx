import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-wiki-france');
}

export default function NonPvpWikiFranceKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-wiki-france" />;
}
