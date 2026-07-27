import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-screenshots-server-latin-america');
}

export default function TibijkaWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-screenshots-server-latin-america" />;
}
