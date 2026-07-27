import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-13-low-exp-server');
}

export default function Empirebr13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-13-low-exp-server" />;
}
