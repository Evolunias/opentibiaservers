import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-6-low-exp-server');
}

export default function Oxygenot86LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-6-low-exp-server" />;
}
