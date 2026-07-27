import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-13-with-screenshots-server');
}

export default function ClassickDrakoria13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-13-with-screenshots-server" />;
}
