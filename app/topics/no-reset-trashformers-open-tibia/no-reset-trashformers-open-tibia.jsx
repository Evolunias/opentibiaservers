import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-trashformers-open-tibia');
}

export default function NoResetTrashformersOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-trashformers-open-tibia" />;
}
