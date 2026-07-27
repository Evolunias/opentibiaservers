import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-screenshots-server-brazil');
}

export default function ArcaniarlWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-screenshots-server-brazil" />;
}
