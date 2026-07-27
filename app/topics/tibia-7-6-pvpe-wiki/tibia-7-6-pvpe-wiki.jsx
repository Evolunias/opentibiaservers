import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-pvpe-wiki');
}

export default function Tibia76PvpeWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-pvpe-wiki" />;
}
