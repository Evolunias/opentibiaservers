import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-6-low-exp-server');
}

export default function Oxygenot76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-6-low-exp-server" />;
}
