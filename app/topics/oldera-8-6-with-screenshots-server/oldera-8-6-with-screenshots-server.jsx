import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-6-with-screenshots-server');
}

export default function Oldera86WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-6-with-screenshots-server" />;
}
