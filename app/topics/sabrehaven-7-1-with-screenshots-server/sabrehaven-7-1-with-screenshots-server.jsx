import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-1-with-screenshots-server');
}

export default function Sabrehaven71WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-1-with-screenshots-server" />;
}
