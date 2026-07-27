import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-screenshots-server-sweden');
}

export default function ThaisotWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-screenshots-server-sweden" />;
}
