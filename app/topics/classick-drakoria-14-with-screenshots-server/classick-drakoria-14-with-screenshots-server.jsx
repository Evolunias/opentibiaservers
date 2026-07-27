import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-14-with-screenshots-server');
}

export default function ClassickDrakoria14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-14-with-screenshots-server" />;
}
