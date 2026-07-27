import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-12-with-screenshots-server');
}

export default function Medivia12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-12-with-screenshots-server" />;
}
