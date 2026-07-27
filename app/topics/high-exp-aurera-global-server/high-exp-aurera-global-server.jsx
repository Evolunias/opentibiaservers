import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-aurera-global-server');
}

export default function HighExpAureraGlobalServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-aurera-global-server" />;
}
