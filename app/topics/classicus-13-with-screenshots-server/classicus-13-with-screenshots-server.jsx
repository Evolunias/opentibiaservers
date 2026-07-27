import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-13-with-screenshots-server');
}

export default function Classicus13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-13-with-screenshots-server" />;
}
