import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-10-0-with-screenshots-server');
}

export default function Arcaniarl100WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-10-0-with-screenshots-server" />;
}
