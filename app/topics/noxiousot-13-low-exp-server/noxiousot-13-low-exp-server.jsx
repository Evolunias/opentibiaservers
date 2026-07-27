import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-13-low-exp-server');
}

export default function Noxiousot13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-13-low-exp-server" />;
}
