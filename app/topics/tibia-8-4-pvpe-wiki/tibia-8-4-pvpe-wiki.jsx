import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-pvpe-wiki');
}

export default function Tibia84PvpeWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-pvpe-wiki" />;
}
