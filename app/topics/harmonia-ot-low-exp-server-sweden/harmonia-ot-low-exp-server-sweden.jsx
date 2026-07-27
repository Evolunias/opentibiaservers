import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-low-exp-server-sweden');
}

export default function HarmoniaOtLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-low-exp-server-sweden" />;
}
