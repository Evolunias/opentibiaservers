import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-yurots-client');
}

export default function CurrentYurotsClientKeywordPage() {
  return <StaticKeywordPage slug="current-yurots-client" />;
}
