import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-6-with-screenshots-server');
}

export default function Tibijka76WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-6-with-screenshots-server" />;
}
