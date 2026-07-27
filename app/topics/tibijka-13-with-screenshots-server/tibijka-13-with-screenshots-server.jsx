import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-13-with-screenshots-server');
}

export default function Tibijka13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-13-with-screenshots-server" />;
}
