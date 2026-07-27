import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-aurera-global-ot-server');
}

export default function BestAureraGlobalOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-aurera-global-ot-server" />;
}
