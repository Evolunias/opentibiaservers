import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-13-with-screenshots-server');
}

export default function Evolunia13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-13-with-screenshots-server" />;
}
