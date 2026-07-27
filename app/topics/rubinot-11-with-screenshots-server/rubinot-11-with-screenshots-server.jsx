import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-11-with-screenshots-server');
}

export default function Rubinot11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-11-with-screenshots-server" />;
}
