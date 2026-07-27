import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-screenshots-server-latin-america');
}

export default function RealestaWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-screenshots-server-latin-america" />;
}
