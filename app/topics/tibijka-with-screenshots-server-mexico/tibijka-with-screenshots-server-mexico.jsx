import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-screenshots-server-mexico');
}

export default function TibijkaWithScreenshotsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-screenshots-server-mexico" />;
}
