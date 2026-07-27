import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-14-high-exp-server');
}

export default function Oxygenot14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-14-high-exp-server" />;
}
