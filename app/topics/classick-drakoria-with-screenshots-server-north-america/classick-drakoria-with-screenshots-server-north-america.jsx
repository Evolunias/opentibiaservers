import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-with-screenshots-server-north-america');
}

export default function ClassickDrakoriaWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-with-screenshots-server-north-america" />;
}
