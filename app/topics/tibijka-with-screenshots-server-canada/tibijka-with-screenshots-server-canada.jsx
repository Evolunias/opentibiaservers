import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-screenshots-server-canada');
}

export default function TibijkaWithScreenshotsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-screenshots-server-canada" />;
}
