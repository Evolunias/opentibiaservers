import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-screenshots-server-argentina');
}

export default function VenoreotWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-screenshots-server-argentina" />;
}
