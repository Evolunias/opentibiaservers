import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-trashformers-open-tibia');
}

export default function RealMapTrashformersOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-trashformers-open-tibia" />;
}
