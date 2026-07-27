import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-1-high-exp-server');
}

export default function Oxygenot81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-1-high-exp-server" />;
}
