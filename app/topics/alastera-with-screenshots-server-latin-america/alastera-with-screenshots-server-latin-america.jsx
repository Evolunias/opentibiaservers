import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-screenshots-server-latin-america');
}

export default function AlasteraWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-screenshots-server-latin-america" />;
}
