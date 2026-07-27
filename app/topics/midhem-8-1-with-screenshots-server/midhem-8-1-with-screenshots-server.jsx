import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-1-with-screenshots-server');
}

export default function Midhem81WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-1-with-screenshots-server" />;
}
