import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-11-with-screenshots-server');
}

export default function Evolunia11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-11-with-screenshots-server" />;
}
