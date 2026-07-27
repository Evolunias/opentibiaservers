import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-yurots-client');
}

export default function TopYurotsClientKeywordPage() {
  return <StaticKeywordPage slug="top-yurots-client" />;
}
