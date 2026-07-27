import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-12-with-screenshots-server');
}

export default function Sabrehaven12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-12-with-screenshots-server" />;
}
