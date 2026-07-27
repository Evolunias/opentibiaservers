import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-11-with-screenshots-server');
}

export default function Classicus11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-11-with-screenshots-server" />;
}
