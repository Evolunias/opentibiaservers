import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-0-with-screenshots-server');
}

export default function Evolunia80WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-0-with-screenshots-server" />;
}
