import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvpe-wiki');
}

export default function Tibia96PvpeWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvpe-wiki" />;
}
