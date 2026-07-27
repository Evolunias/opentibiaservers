import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-1-with-screenshots-server');
}

export default function Medivia71WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-1-with-screenshots-server" />;
}
