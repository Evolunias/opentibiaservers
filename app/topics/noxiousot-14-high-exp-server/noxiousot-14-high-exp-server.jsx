import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-14-high-exp-server');
}

export default function Noxiousot14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-14-high-exp-server" />;
}
