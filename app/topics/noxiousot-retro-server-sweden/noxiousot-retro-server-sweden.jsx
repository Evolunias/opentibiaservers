import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-retro-server-sweden');
}

export default function NoxiousotRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-retro-server-sweden" />;
}
