import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-yurots-server');
}

export default function BestYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="best-yurots-server" />;
}
