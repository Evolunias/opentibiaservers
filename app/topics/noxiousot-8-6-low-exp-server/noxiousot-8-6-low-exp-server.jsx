import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-6-low-exp-server');
}

export default function Noxiousot86LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-6-low-exp-server" />;
}
