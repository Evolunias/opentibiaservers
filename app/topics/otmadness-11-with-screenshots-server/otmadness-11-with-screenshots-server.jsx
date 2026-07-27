import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-11-with-screenshots-server');
}

export default function Otmadness11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-11-with-screenshots-server" />;
}
