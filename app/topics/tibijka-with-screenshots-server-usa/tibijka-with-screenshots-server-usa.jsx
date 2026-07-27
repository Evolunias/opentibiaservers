import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-screenshots-server-usa');
}

export default function TibijkaWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-screenshots-server-usa" />;
}
