import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-11-with-screenshots-server');
}

export default function Oldera11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-11-with-screenshots-server" />;
}
