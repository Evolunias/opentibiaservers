import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-custom-map-wiki');
}

export default function Tibia11CustomMapWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-custom-map-wiki" />;
}
