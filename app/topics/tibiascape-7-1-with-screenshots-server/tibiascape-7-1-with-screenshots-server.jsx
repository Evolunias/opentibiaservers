import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-1-with-screenshots-server');
}

export default function Tibiascape71WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-1-with-screenshots-server" />;
}
