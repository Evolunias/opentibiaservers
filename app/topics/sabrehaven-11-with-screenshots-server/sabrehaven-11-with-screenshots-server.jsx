import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-11-with-screenshots-server');
}

export default function Sabrehaven11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-11-with-screenshots-server" />;
}
