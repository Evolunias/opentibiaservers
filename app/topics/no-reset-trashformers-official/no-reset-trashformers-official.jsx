import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-trashformers-official');
}

export default function NoResetTrashformersOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-trashformers-official" />;
}
