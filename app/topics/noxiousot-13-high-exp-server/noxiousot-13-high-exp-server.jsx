import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-13-high-exp-server');
}

export default function Noxiousot13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-13-high-exp-server" />;
}
