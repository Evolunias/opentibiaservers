import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-yurots-ot-server');
}

export default function BestYurotsOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-yurots-ot-server" />;
}
