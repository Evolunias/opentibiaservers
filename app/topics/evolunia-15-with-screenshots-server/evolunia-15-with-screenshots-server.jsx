import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-15-with-screenshots-server');
}

export default function Evolunia15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-15-with-screenshots-server" />;
}
