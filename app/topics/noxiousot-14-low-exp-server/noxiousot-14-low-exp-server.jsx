import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-14-low-exp-server');
}

export default function Noxiousot14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-14-low-exp-server" />;
}
