import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-screenshots-server-sweden');
}

export default function ArcaniarlWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-screenshots-server-sweden" />;
}
