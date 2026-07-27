import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-screenshots-server-poland');
}

export default function VenoreotWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-screenshots-server-poland" />;
}
