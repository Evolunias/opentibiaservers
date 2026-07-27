import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-1-with-screenshots-server');
}

export default function Classicus71WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-1-with-screenshots-server" />;
}
