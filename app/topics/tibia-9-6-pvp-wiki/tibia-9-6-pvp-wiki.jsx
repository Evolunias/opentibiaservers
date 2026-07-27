import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvp-wiki');
}

export default function Tibia96PvpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvp-wiki" />;
}
