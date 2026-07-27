import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-11-with-screenshots-server');
}

export default function Midhem11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-11-with-screenshots-server" />;
}
