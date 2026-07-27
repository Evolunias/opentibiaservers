import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-12-with-screenshots-server');
}

export default function Evolunia12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-12-with-screenshots-server" />;
}
