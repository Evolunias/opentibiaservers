import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-screenshots-server-germany');
}

export default function VenoreotWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-screenshots-server-germany" />;
}
