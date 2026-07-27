import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-12-with-screenshots-server');
}

export default function Oldera12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-12-with-screenshots-server" />;
}
