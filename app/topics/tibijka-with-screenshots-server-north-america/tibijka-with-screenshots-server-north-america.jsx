import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-screenshots-server-north-america');
}

export default function TibijkaWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-screenshots-server-north-america" />;
}
