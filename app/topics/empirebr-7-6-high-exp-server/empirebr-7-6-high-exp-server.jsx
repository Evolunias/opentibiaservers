import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-6-high-exp-server');
}

export default function Empirebr76HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-6-high-exp-server" />;
}
