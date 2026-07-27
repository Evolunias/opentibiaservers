import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-11-with-screenshots-server');
}

export default function ClassickDrakoria11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-11-with-screenshots-server" />;
}
