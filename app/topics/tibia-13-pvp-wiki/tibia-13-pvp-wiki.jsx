import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-pvp-wiki');
}

export default function Tibia13PvpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-pvp-wiki" />;
}
