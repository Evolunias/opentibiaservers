import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-yurots-client');
}

export default function FreshStartYurotsClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-yurots-client" />;
}
