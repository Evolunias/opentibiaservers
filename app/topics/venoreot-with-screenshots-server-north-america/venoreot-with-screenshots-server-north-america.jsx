import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-screenshots-server-north-america');
}

export default function VenoreotWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-screenshots-server-north-america" />;
}
