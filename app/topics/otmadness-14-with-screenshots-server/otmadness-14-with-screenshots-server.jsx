import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-14-with-screenshots-server');
}

export default function Otmadness14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-14-with-screenshots-server" />;
}
