import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-screenshots-server-germany');
}

export default function ArcaniarlWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-screenshots-server-germany" />;
}
