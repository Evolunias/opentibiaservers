import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-15-with-screenshots-server');
}

export default function Sabrehaven15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-15-with-screenshots-server" />;
}
