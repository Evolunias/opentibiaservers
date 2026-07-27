import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-trashformers-rules');
}

export default function RealMapTrashformersRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-trashformers-rules" />;
}
