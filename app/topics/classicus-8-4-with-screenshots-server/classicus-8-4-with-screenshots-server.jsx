import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-4-with-screenshots-server');
}

export default function Classicus84WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-4-with-screenshots-server" />;
}
