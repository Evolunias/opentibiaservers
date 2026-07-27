import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-screenshots-server-latin-america');
}

export default function MidhemWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-screenshots-server-latin-america" />;
}
