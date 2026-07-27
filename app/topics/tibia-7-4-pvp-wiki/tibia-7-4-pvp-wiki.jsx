import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvp-wiki');
}

export default function Tibia74PvpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvp-wiki" />;
}
