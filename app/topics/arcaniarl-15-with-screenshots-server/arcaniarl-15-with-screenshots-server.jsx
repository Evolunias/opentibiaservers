import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-15-with-screenshots-server');
}

export default function Arcaniarl15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-15-with-screenshots-server" />;
}
