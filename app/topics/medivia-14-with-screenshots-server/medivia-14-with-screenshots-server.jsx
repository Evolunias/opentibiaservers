import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-14-with-screenshots-server');
}

export default function Medivia14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-14-with-screenshots-server" />;
}
