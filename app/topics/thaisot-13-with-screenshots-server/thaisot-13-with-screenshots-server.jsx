import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-13-with-screenshots-server');
}

export default function Thaisot13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-13-with-screenshots-server" />;
}
