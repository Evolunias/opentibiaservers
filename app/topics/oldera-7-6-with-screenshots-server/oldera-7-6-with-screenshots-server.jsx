import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-6-with-screenshots-server');
}

export default function Oldera76WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-6-with-screenshots-server" />;
}
