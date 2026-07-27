import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-screenshots-server-sweden');
}

export default function VenoreotWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-screenshots-server-sweden" />;
}
