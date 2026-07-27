import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-15-with-screenshots-server');
}

export default function Tibiascape15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-15-with-screenshots-server" />;
}
