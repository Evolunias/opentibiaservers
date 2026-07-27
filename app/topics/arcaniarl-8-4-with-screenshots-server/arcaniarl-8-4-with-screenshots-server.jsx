import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-4-with-screenshots-server');
}

export default function Arcaniarl84WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-4-with-screenshots-server" />;
}
