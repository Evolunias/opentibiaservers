import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-screenshots-server-europe');
}

export default function VenoreotWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-screenshots-server-europe" />;
}
