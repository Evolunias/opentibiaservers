import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-10-98-low-exp-server');
}

export default function Empirebr1098LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-10-98-low-exp-server" />;
}
