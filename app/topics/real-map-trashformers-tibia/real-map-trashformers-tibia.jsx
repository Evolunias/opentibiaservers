import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-trashformers-tibia');
}

export default function RealMapTrashformersTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-trashformers-tibia" />;
}
