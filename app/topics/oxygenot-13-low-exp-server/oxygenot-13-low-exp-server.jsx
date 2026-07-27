import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-13-low-exp-server');
}

export default function Oxygenot13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-13-low-exp-server" />;
}
