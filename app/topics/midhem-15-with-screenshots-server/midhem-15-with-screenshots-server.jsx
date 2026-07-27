import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-15-with-screenshots-server');
}

export default function Midhem15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-15-with-screenshots-server" />;
}
