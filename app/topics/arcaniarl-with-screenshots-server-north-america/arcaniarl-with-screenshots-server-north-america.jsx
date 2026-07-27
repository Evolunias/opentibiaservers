import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-screenshots-server-north-america');
}

export default function ArcaniarlWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-screenshots-server-north-america" />;
}
