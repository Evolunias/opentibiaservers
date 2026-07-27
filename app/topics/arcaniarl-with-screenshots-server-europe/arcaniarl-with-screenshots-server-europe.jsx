import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-screenshots-server-europe');
}

export default function ArcaniarlWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-screenshots-server-europe" />;
}
