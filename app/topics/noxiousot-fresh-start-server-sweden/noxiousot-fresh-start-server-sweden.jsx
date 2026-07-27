import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-fresh-start-server-sweden');
}

export default function NoxiousotFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-fresh-start-server-sweden" />;
}
