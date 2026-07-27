import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-9-6-with-screenshots-server');
}

export default function Classicus96WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-9-6-with-screenshots-server" />;
}
