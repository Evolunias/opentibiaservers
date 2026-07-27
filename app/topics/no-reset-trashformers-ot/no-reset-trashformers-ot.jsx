import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-trashformers-ot');
}

export default function NoResetTrashformersOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-trashformers-ot" />;
}
