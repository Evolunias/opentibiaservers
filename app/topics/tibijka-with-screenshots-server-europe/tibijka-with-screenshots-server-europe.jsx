import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-screenshots-server-europe');
}

export default function TibijkaWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-screenshots-server-europe" />;
}
