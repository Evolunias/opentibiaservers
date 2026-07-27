import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-11-with-screenshots-server');
}

export default function Thaisot11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-11-with-screenshots-server" />;
}
