import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-trashformers-tibia');
}

export default function LowrateTrashformersTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-trashformers-tibia" />;
}
