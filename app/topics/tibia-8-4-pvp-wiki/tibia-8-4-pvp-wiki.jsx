import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-pvp-wiki');
}

export default function Tibia84PvpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-pvp-wiki" />;
}
