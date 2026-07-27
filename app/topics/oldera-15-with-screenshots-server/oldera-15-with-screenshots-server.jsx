import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-15-with-screenshots-server');
}

export default function Oldera15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-15-with-screenshots-server" />;
}
