import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-noxiousot-server');
}

export default function EvoNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="evo-noxiousot-server" />;
}
