import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-4-with-screenshots-server');
}

export default function Otmadness84WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-4-with-screenshots-server" />;
}
