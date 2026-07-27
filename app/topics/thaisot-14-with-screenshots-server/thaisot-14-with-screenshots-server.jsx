import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-14-with-screenshots-server');
}

export default function Thaisot14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-14-with-screenshots-server" />;
}
