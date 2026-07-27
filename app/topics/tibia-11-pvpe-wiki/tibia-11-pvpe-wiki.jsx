import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvpe-wiki');
}

export default function Tibia11PvpeWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvpe-wiki" />;
}
