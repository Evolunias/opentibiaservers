import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-harmonia-ot-server');
}

export default function EvoHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="evo-harmonia-ot-server" />;
}
