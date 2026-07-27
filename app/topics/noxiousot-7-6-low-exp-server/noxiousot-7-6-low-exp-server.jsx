import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-6-low-exp-server');
}

export default function Noxiousot76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-6-low-exp-server" />;
}
