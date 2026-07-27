import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-15-high-exp-server');
}

export default function Oxygenot15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-15-high-exp-server" />;
}
