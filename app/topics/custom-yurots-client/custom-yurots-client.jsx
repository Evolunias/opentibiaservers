import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-yurots-client');
}

export default function CustomYurotsClientKeywordPage() {
  return <StaticKeywordPage slug="custom-yurots-client" />;
}
