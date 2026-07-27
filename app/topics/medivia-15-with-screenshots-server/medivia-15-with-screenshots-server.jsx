import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-15-with-screenshots-server');
}

export default function Medivia15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-15-with-screenshots-server" />;
}
