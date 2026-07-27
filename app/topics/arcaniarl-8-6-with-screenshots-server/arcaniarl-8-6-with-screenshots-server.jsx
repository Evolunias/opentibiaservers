import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-6-with-screenshots-server');
}

export default function Arcaniarl86WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-6-with-screenshots-server" />;
}
