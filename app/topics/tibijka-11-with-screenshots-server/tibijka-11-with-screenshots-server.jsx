import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-11-with-screenshots-server');
}

export default function Tibijka11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-11-with-screenshots-server" />;
}
