import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-1-low-exp-server');
}

export default function Noxiousot71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-1-low-exp-server" />;
}
