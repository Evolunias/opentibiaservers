import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-screenshots-server-latin-america');
}

export default function OlderaWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-screenshots-server-latin-america" />;
}
