import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-12-high-exp-server');
}

export default function Empirebr12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-12-high-exp-server" />;
}
