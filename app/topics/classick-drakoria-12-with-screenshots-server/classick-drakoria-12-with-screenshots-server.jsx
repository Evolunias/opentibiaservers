import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-12-with-screenshots-server');
}

export default function ClassickDrakoria12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-12-with-screenshots-server" />;
}
