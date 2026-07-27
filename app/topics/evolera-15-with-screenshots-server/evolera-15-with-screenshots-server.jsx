import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-15-with-screenshots-server');
}

export default function Evolera15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-15-with-screenshots-server" />;
}
