import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-1-with-screenshots-server');
}

export default function Sabrehaven81WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-1-with-screenshots-server" />;
}
