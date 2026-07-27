import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-15-with-screenshots-server');
}

export default function Realera15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="realera-15-with-screenshots-server" />;
}
