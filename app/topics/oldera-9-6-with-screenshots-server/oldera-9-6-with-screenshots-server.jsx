import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-9-6-with-screenshots-server');
}

export default function Oldera96WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-9-6-with-screenshots-server" />;
}
