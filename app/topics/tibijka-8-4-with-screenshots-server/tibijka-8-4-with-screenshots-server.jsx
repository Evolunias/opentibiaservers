import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-4-with-screenshots-server');
}

export default function Tibijka84WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-4-with-screenshots-server" />;
}
