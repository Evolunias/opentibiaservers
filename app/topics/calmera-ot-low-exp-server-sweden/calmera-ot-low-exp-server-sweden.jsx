import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-low-exp-server-sweden');
}

export default function CalmeraOtLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-low-exp-server-sweden" />;
}
