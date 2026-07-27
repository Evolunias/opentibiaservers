import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-miracle-client');
}

export default function OfficialMiracleClientKeywordPage() {
  return <StaticKeywordPage slug="official-miracle-client" />;
}
