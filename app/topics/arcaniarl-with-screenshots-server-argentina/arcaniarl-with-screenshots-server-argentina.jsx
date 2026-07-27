import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-screenshots-server-argentina');
}

export default function ArcaniarlWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-screenshots-server-argentina" />;
}
