import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-yurots-ot-server');
}

export default function CurrentYurotsOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-yurots-ot-server" />;
}
