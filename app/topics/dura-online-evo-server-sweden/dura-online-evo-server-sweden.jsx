import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-evo-server-sweden');
}

export default function DuraOnlineEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="dura-online-evo-server-sweden" />;
}
