import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-12-with-screenshots-server');
}

export default function Tibijka12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-12-with-screenshots-server" />;
}
