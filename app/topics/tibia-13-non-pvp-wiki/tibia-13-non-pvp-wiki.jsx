import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-non-pvp-wiki');
}

export default function Tibia13NonPvpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-non-pvp-wiki" />;
}
