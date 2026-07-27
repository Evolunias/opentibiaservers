import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-screenshots');
}

export default function TrashformersScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="trashformers-screenshots" />;
}
