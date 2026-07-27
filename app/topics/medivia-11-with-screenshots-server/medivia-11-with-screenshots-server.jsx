import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-11-with-screenshots-server');
}

export default function Medivia11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-11-with-screenshots-server" />;
}
