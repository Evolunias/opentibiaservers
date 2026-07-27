import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvp-server-sweden');
}

export default function DuraOnlinePvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvp-server-sweden" />;
}
