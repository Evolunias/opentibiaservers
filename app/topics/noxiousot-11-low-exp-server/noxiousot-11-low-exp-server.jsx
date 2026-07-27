import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-11-low-exp-server');
}

export default function Noxiousot11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-11-low-exp-server" />;
}
