import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-trashformers-tibia');
}

export default function OfficialTrashformersTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-trashformers-tibia" />;
}
