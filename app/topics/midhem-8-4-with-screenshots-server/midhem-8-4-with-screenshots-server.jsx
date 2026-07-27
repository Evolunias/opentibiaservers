import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-4-with-screenshots-server');
}

export default function Midhem84WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-4-with-screenshots-server" />;
}
