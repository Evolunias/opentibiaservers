import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-13-with-screenshots-server');
}

export default function Sabrehaven13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-13-with-screenshots-server" />;
}
