import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-6-high-exp-server');
}

export default function Oxygenot86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-6-high-exp-server" />;
}
