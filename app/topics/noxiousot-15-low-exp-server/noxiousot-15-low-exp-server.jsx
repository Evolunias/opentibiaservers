import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-15-low-exp-server');
}

export default function Noxiousot15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-15-low-exp-server" />;
}
