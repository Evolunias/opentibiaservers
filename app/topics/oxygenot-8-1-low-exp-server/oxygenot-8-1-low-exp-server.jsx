import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-1-low-exp-server');
}

export default function Oxygenot81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-1-low-exp-server" />;
}
