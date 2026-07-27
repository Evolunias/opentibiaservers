import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-pvpe-wiki');
}

export default function Tibia13PvpeWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-pvpe-wiki" />;
}
