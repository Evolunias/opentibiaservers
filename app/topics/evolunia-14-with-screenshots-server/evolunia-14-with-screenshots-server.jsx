import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-14-with-screenshots-server');
}

export default function Evolunia14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-14-with-screenshots-server" />;
}
