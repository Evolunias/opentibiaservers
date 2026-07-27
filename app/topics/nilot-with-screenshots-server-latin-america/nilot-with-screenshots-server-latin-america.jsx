import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-screenshots-server-latin-america');
}

export default function NilotWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-screenshots-server-latin-america" />;
}
