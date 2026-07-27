import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-4-with-screenshots-server');
}

export default function Thaisot84WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-4-with-screenshots-server" />;
}
