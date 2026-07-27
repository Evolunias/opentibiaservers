import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-pvpe-wiki');
}

export default function Tibia86PvpeWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-pvpe-wiki" />;
}
