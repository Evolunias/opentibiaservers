import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-1-high-exp-server');
}

export default function Noxiousot81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-1-high-exp-server" />;
}
