import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-pvpe-wiki');
}

export default function Tibia854PvpeWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-pvpe-wiki" />;
}
