import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-6-with-screenshots-server');
}

export default function Rubinot76WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-6-with-screenshots-server" />;
}
