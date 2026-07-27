import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-trashformers-open-tibia');
}

export default function OfficialTrashformersOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-trashformers-open-tibia" />;
}
