import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-0-low-exp-server');
}

export default function Empirebr80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-0-low-exp-server" />;
}
