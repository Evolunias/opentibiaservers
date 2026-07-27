import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-15-with-screenshots-server');
}

export default function Classicus15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-15-with-screenshots-server" />;
}
