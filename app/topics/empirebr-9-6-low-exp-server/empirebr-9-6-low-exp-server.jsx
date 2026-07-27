import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-9-6-low-exp-server');
}

export default function Empirebr96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-9-6-low-exp-server" />;
}
