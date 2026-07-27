import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-9-6-with-screenshots-server');
}

export default function Midhem96WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-9-6-with-screenshots-server" />;
}
