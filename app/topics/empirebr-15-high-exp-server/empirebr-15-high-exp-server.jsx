import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-15-high-exp-server');
}

export default function Empirebr15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-15-high-exp-server" />;
}
