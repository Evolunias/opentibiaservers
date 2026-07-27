import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-1-low-exp-server');
}

export default function Oxygenot71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-1-low-exp-server" />;
}
