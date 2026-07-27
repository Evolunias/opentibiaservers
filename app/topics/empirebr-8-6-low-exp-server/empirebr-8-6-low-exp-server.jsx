import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-6-low-exp-server');
}

export default function Empirebr86LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-6-low-exp-server" />;
}
