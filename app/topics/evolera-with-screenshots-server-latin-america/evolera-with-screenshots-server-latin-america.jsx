import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-screenshots-server-latin-america');
}

export default function EvoleraWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-screenshots-server-latin-america" />;
}
