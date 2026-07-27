import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-6-with-screenshots-server');
}

export default function ClassickDrakoria86WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-6-with-screenshots-server" />;
}
