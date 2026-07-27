import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-screenshots-server-uk');
}

export default function ArcaniarlWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-screenshots-server-uk" />;
}
