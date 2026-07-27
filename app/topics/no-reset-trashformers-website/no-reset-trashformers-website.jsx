import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-trashformers-website');
}

export default function NoResetTrashformersWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-trashformers-website" />;
}
