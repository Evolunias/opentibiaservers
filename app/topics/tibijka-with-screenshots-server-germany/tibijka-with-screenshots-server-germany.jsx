import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-screenshots-server-germany');
}

export default function TibijkaWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-screenshots-server-germany" />;
}
