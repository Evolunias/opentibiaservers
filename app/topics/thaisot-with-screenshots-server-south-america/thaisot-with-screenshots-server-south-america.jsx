import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-screenshots-server-south-america');
}

export default function ThaisotWithScreenshotsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-screenshots-server-south-america" />;
}
