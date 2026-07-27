import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-4-with-screenshots-server');
}

export default function Arcaniarl74WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-4-with-screenshots-server" />;
}
