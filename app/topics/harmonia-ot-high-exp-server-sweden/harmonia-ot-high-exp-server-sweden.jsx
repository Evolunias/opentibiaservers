import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-high-exp-server-sweden');
}

export default function HarmoniaOtHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-high-exp-server-sweden" />;
}
