import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-12-with-screenshots-server');
}

export default function Tibiascape12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-12-with-screenshots-server" />;
}
