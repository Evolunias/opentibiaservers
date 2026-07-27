import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-10-0-low-exp-server');
}

export default function Noxiousot100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-10-0-low-exp-server" />;
}
