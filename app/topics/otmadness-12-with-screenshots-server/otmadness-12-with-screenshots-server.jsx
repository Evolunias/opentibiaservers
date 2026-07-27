import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-12-with-screenshots-server');
}

export default function Otmadness12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-12-with-screenshots-server" />;
}
