import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-10-0-with-screenshots-server');
}

export default function Midhem100WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-10-0-with-screenshots-server" />;
}
