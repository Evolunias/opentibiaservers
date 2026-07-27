import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-1-with-screenshots-server');
}

export default function Arcaniarl81WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-1-with-screenshots-server" />;
}
