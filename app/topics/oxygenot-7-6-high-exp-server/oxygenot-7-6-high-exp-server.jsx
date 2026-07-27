import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-6-high-exp-server');
}

export default function Oxygenot76HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-6-high-exp-server" />;
}
