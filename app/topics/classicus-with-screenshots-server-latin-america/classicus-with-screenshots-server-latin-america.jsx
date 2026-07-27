import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-screenshots-server-latin-america');
}

export default function ClassicusWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-screenshots-server-latin-america" />;
}
