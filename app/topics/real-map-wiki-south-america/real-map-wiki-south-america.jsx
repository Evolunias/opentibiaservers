import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-wiki-south-america');
}

export default function RealMapWikiSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-wiki-south-america" />;
}
