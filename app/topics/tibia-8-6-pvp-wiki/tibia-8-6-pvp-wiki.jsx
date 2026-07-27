import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-pvp-wiki');
}

export default function Tibia86PvpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-pvp-wiki" />;
}
