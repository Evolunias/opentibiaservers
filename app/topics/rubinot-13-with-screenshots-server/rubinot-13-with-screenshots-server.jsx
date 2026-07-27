import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-13-with-screenshots-server');
}

export default function Rubinot13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-13-with-screenshots-server" />;
}
