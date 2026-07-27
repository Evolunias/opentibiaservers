import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-6-with-screenshots-server');
}

export default function Otmadness76WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-6-with-screenshots-server" />;
}
