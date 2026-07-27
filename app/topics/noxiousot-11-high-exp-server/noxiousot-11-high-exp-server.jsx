import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-11-high-exp-server');
}

export default function Noxiousot11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-11-high-exp-server" />;
}
