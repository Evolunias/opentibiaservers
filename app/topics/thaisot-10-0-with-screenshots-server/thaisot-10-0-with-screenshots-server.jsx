import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-10-0-with-screenshots-server');
}

export default function Thaisot100WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-10-0-with-screenshots-server" />;
}
