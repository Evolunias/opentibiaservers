import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-0-with-screenshots-server');
}

export default function Oldera80WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-0-with-screenshots-server" />;
}
