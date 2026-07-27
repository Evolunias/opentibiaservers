import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-15-with-screenshots-server');
}

export default function ClassickDrakoria15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-15-with-screenshots-server" />;
}
