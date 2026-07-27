import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-sweden');
}

export default function PvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-sweden" />;
}
