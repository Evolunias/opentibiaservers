import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-14-with-screenshots-server');
}

export default function Rubinot14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-14-with-screenshots-server" />;
}
