import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-15-with-screenshots-server');
}

export default function Rubinot15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-15-with-screenshots-server" />;
}
