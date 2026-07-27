import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-screenshots-server-poland');
}

export default function TibijkaWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-screenshots-server-poland" />;
}
