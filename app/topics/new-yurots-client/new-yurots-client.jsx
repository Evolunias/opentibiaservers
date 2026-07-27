import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-yurots-client');
}

export default function NewYurotsClientKeywordPage() {
  return <StaticKeywordPage slug="new-yurots-client" />;
}
