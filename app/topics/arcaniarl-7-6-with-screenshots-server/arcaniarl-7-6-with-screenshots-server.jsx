import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-6-with-screenshots-server');
}

export default function Arcaniarl76WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-6-with-screenshots-server" />;
}
