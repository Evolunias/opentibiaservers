import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-1-with-screenshots-server');
}

export default function Rubinot81WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-1-with-screenshots-server" />;
}
