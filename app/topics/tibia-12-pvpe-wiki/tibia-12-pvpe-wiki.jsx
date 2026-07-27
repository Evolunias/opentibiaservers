import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvpe-wiki');
}

export default function Tibia12PvpeWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvpe-wiki" />;
}
