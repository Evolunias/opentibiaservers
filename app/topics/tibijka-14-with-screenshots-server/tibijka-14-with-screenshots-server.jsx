import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-14-with-screenshots-server');
}

export default function Tibijka14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-14-with-screenshots-server" />;
}
