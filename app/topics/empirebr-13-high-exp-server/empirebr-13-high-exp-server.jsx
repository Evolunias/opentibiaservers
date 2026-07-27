import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-13-high-exp-server');
}

export default function Empirebr13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-13-high-exp-server" />;
}
