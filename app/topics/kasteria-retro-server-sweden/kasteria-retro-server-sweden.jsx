import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-retro-server-sweden');
}

export default function KasteriaRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="kasteria-retro-server-sweden" />;
}
