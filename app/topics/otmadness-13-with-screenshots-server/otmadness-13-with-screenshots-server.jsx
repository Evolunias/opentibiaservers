import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-13-with-screenshots-server');
}

export default function Otmadness13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-13-with-screenshots-server" />;
}
