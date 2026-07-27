import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-15-with-screenshots-server');
}

export default function Otmadness15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-15-with-screenshots-server" />;
}
