import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-screenshots-server-uk');
}

export default function TibijkaWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-screenshots-server-uk" />;
}
