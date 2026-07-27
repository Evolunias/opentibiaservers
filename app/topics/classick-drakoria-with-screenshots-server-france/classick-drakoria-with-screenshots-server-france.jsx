import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-with-screenshots-server-france');
}

export default function ClassickDrakoriaWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-with-screenshots-server-france" />;
}
