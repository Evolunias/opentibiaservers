import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-14-high-exp-server');
}

export default function Empirebr14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-14-high-exp-server" />;
}
