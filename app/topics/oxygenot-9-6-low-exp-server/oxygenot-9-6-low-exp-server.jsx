import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-9-6-low-exp-server');
}

export default function Oxygenot96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-9-6-low-exp-server" />;
}
