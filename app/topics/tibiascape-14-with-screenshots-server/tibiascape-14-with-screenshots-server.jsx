import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-14-with-screenshots-server');
}

export default function Tibiascape14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-14-with-screenshots-server" />;
}
