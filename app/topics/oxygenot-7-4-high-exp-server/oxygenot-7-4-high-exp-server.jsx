import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-4-high-exp-server');
}

export default function Oxygenot74HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-4-high-exp-server" />;
}
