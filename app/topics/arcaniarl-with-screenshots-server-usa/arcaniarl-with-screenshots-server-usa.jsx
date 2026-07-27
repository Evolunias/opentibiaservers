import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-screenshots-server-usa');
}

export default function ArcaniarlWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-screenshots-server-usa" />;
}
