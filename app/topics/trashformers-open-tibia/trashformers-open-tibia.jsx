import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-open-tibia');
}

export default function TrashformersOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-open-tibia" />;
}
