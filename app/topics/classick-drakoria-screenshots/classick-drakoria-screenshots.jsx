import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-screenshots');
}

export default function ClassickDrakoriaScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-screenshots" />;
}
