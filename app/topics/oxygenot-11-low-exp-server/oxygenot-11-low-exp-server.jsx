import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-11-low-exp-server');
}

export default function Oxygenot11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-11-low-exp-server" />;
}
