import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-0-with-screenshots-server');
}

export default function Tibiascape80WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-0-with-screenshots-server" />;
}
