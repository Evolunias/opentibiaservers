import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-13-high-exp-server');
}

export default function Oxygenot13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-13-high-exp-server" />;
}
