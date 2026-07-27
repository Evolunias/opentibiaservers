import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-ot-server-sweden');
}

export default function PvpOtServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-ot-server-sweden" />;
}
