import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvpe-wiki');
}

export default function Tibia81PvpeWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvpe-wiki" />;
}
