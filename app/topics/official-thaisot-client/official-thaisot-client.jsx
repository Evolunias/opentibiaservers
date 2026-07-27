import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thaisot-client');
}

export default function OfficialThaisotClientKeywordPage() {
  return <StaticKeywordPage slug="official-thaisot-client" />;
}
