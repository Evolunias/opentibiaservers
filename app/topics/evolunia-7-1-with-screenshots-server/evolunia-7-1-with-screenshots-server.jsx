import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-1-with-screenshots-server');
}

export default function Evolunia71WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-1-with-screenshots-server" />;
}
