import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvpe-wiki');
}

export default function Tibia74PvpeWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvpe-wiki" />;
}
