import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-6-low-exp-server');
}

export default function Empirebr76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-6-low-exp-server" />;
}
