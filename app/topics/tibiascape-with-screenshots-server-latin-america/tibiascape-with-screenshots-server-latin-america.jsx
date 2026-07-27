import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-screenshots-server-latin-america');
}

export default function TibiascapeWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-screenshots-server-latin-america" />;
}
