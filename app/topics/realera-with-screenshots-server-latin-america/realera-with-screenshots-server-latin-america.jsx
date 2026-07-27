import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-screenshots-server-latin-america');
}

export default function RealeraWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-with-screenshots-server-latin-america" />;
}
