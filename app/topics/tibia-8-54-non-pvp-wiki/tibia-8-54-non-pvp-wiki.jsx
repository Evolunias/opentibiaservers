import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-non-pvp-wiki');
}

export default function Tibia854NonPvpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-non-pvp-wiki" />;
}
