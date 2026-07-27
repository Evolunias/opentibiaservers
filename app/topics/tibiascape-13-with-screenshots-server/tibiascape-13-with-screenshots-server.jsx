import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-13-with-screenshots-server');
}

export default function Tibiascape13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-13-with-screenshots-server" />;
}
