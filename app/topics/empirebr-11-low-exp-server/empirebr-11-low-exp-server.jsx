import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-11-low-exp-server');
}

export default function Empirebr11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-11-low-exp-server" />;
}
