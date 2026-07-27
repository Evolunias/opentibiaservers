import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-screenshots-server-latin-america');
}

export default function TibiantisWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-screenshots-server-latin-america" />;
}
