import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-1-with-screenshots-server');
}

export default function Otmadness71WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-1-with-screenshots-server" />;
}
