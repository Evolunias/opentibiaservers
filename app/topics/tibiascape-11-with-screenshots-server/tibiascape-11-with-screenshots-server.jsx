import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-11-with-screenshots-server');
}

export default function Tibiascape11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-11-with-screenshots-server" />;
}
