import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-custom-map-wiki');
}

export default function Tibia14CustomMapWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-custom-map-wiki" />;
}
