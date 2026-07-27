import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-yurots-client');
}

export default function ActiveYurotsClientKeywordPage() {
  return <StaticKeywordPage slug="active-yurots-client" />;
}
