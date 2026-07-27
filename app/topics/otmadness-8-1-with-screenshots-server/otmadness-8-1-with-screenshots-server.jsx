import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-1-with-screenshots-server');
}

export default function Otmadness81WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-1-with-screenshots-server" />;
}
