import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-14-with-screenshots-server');
}

export default function Sabrehaven14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-14-with-screenshots-server" />;
}
