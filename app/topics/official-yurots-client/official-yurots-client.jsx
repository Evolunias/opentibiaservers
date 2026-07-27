import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-yurots-client');
}

export default function OfficialYurotsClientKeywordPage() {
  return <StaticKeywordPage slug="official-yurots-client" />;
}
