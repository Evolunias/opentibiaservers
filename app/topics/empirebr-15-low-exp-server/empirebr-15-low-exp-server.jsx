import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-15-low-exp-server');
}

export default function Empirebr15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-15-low-exp-server" />;
}
