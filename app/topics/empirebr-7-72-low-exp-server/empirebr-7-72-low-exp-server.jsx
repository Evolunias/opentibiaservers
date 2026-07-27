import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-72-low-exp-server');
}

export default function Empirebr772LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-72-low-exp-server" />;
}
