import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-screenshots-server-latin-america');
}

export default function ArcaniarlWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-screenshots-server-latin-america" />;
}
