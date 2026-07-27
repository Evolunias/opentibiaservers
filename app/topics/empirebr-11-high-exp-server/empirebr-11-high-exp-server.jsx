import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-11-high-exp-server');
}

export default function Empirebr11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-11-high-exp-server" />;
}
