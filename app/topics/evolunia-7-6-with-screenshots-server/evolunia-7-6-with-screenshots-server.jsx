import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-6-with-screenshots-server');
}

export default function Evolunia76WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-6-with-screenshots-server" />;
}
