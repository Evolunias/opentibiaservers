import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-13-with-screenshots-server');
}

export default function Medivia13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-13-with-screenshots-server" />;
}
