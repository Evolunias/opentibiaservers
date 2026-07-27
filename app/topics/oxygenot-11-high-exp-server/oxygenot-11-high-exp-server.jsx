import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-11-high-exp-server');
}

export default function Oxygenot11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-11-high-exp-server" />;
}
