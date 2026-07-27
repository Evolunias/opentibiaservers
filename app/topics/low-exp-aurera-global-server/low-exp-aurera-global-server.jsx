import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-aurera-global-server');
}

export default function LowExpAureraGlobalServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-aurera-global-server" />;
}
