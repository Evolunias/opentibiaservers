import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-12-high-exp-server');
}

export default function Noxiousot12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-12-high-exp-server" />;
}
