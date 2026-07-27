import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-yurots-ot-server');
}

export default function TopYurotsOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-yurots-ot-server" />;
}
