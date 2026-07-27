import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-pvp-wiki');
}

export default function Tibia1098PvpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-pvp-wiki" />;
}
