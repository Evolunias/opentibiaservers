import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-0-high-exp-server');
}

export default function Noxiousot80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-0-high-exp-server" />;
}
