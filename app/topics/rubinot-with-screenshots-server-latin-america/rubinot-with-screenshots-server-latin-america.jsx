import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-screenshots-server-latin-america');
}

export default function RubinotWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-screenshots-server-latin-america" />;
}
