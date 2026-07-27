import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-screenshots-server-latin-america');
}

export default function VenoreotWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-screenshots-server-latin-america" />;
}
