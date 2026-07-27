import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-10-0-high-exp-server');
}

export default function Oxygenot100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-10-0-high-exp-server" />;
}
