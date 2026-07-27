import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-10-0-with-screenshots-server');
}

export default function Classicus100WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-10-0-with-screenshots-server" />;
}
