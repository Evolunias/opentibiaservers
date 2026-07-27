import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-non-pvp-server-sweden');
}

export default function CalmeraOtNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-non-pvp-server-sweden" />;
}
