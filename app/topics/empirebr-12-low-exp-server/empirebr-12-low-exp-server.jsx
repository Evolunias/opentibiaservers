import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-12-low-exp-server');
}

export default function Empirebr12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-12-low-exp-server" />;
}
