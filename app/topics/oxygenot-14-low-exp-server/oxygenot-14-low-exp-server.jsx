import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-14-low-exp-server');
}

export default function Oxygenot14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-14-low-exp-server" />;
}
