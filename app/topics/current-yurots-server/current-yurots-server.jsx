import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-yurots-server');
}

export default function CurrentYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="current-yurots-server" />;
}
