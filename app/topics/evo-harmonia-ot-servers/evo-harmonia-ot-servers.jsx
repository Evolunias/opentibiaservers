import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-harmonia-ot-servers');
}

export default function EvoHarmoniaOtServersKeywordPage() {
  return <StaticKeywordPage slug="evo-harmonia-ot-servers" />;
}
