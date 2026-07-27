import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-10-0-high-exp-server');
}

export default function Noxiousot100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-10-0-high-exp-server" />;
}
