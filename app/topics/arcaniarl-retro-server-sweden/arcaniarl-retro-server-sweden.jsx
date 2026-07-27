import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-retro-server-sweden');
}

export default function ArcaniarlRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-retro-server-sweden" />;
}
