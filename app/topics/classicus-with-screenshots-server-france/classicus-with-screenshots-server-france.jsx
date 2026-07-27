import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-screenshots-server-france');
}

export default function ClassicusWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-screenshots-server-france" />;
}
