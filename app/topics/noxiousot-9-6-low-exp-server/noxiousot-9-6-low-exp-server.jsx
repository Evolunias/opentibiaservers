import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-9-6-low-exp-server');
}

export default function Noxiousot96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-9-6-low-exp-server" />;
}
