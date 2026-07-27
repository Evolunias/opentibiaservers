import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-12-low-exp-server');
}

export default function Noxiousot12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-12-low-exp-server" />;
}
