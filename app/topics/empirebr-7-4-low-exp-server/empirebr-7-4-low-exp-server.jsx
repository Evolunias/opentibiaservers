import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-4-low-exp-server');
}

export default function Empirebr74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-4-low-exp-server" />;
}
