import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-with-screenshots-server-france');
}

export default function TrashformersWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="trashformers-with-screenshots-server-france" />;
}
