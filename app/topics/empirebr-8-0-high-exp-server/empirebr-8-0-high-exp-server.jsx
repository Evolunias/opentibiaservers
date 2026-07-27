import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-0-high-exp-server');
}

export default function Empirebr80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-0-high-exp-server" />;
}
