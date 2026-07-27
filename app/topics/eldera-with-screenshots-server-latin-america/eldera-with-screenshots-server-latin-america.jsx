import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-screenshots-server-latin-america');
}

export default function ElderaWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-screenshots-server-latin-america" />;
}
