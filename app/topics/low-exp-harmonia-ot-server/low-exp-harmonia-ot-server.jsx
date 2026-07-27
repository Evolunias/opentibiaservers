import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-harmonia-ot-server');
}

export default function LowExpHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-harmonia-ot-server" />;
}
