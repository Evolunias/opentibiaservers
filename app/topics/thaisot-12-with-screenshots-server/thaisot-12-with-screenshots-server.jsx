import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-12-with-screenshots-server');
}

export default function Thaisot12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-12-with-screenshots-server" />;
}
