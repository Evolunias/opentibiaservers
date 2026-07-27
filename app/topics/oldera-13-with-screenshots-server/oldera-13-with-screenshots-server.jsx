import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-13-with-screenshots-server');
}

export default function Oldera13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-13-with-screenshots-server" />;
}
