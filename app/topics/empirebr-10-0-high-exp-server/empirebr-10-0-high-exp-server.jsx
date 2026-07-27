import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-10-0-high-exp-server');
}

export default function Empirebr100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-10-0-high-exp-server" />;
}
