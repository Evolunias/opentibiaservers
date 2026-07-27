import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-trashformers-wiki');
}

export default function RealMapTrashformersWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-trashformers-wiki" />;
}
