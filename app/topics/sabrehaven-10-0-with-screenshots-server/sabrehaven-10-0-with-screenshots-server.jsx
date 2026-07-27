import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-0-with-screenshots-server');
}

export default function Sabrehaven100WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-0-with-screenshots-server" />;
}
