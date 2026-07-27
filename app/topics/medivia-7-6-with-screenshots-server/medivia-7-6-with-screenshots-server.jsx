import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-6-with-screenshots-server');
}

export default function Medivia76WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-6-with-screenshots-server" />;
}
