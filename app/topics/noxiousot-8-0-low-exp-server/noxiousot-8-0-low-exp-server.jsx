import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-0-low-exp-server');
}

export default function Noxiousot80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-0-low-exp-server" />;
}
