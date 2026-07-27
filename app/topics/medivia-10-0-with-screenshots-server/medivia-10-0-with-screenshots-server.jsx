import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-0-with-screenshots-server');
}

export default function Medivia100WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-0-with-screenshots-server" />;
}
