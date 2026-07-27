import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-0-with-screenshots-server');
}

export default function Oldera100WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-0-with-screenshots-server" />;
}
