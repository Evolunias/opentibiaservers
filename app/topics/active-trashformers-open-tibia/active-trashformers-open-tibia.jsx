import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-trashformers-open-tibia');
}

export default function ActiveTrashformersOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-trashformers-open-tibia" />;
}
