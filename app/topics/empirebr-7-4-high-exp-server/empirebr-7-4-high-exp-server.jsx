import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-4-high-exp-server');
}

export default function Empirebr74HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-4-high-exp-server" />;
}
