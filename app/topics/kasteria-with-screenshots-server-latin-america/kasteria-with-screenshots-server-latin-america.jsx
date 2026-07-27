import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-screenshots-server-latin-america');
}

export default function KasteriaWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-screenshots-server-latin-america" />;
}
