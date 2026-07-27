import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-4-with-screenshots-server');
}

export default function Tibiascape84WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-4-with-screenshots-server" />;
}
