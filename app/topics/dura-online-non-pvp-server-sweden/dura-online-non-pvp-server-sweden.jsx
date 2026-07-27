import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-non-pvp-server-sweden');
}

export default function DuraOnlineNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="dura-online-non-pvp-server-sweden" />;
}
