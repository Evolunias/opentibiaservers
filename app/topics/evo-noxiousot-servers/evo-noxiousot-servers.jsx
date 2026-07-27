import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-noxiousot-servers');
}

export default function EvoNoxiousotServersKeywordPage() {
  return <StaticKeywordPage slug="evo-noxiousot-servers" />;
}
