import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-10-0-with-screenshots-server');
}

export default function ClassickDrakoria100WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-10-0-with-screenshots-server" />;
}
