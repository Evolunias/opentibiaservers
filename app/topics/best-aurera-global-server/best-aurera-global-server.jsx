import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-aurera-global-server');
}

export default function BestAureraGlobalServerKeywordPage() {
  return <StaticKeywordPage slug="best-aurera-global-server" />;
}
