import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-screenshots-server-latin-america');
}

export default function TibiaraWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-screenshots-server-latin-america" />;
}
