import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-10-0-with-screenshots-server');
}

export default function Rubinot100WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-10-0-with-screenshots-server" />;
}
