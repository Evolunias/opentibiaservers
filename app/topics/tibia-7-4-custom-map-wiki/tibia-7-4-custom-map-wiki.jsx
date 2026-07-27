import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-custom-map-wiki');
}

export default function Tibia74CustomMapWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-custom-map-wiki" />;
}
