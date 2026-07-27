import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-screenshots-server-france');
}

export default function VenoreotWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-screenshots-server-france" />;
}
