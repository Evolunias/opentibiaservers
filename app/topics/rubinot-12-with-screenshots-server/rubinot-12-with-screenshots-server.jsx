import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-12-with-screenshots-server');
}

export default function Rubinot12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-12-with-screenshots-server" />;
}
