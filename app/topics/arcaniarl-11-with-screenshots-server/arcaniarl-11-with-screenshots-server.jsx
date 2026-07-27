import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-11-with-screenshots-server');
}

export default function Arcaniarl11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-11-with-screenshots-server" />;
}
