import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-10-0-low-exp-server');
}

export default function Empirebr100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-10-0-low-exp-server" />;
}
