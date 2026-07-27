import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-fresh-start-server-sweden');
}

export default function CalmeraOtFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-fresh-start-server-sweden" />;
}
