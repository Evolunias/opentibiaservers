import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-15-high-exp-server');
}

export default function Noxiousot15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-15-high-exp-server" />;
}
