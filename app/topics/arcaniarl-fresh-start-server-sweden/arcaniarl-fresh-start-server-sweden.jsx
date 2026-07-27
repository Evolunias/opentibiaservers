import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-fresh-start-server-sweden');
}

export default function ArcaniarlFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-fresh-start-server-sweden" />;
}
