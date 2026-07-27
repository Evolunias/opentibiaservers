import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thaisot-server');
}

export default function OfficialThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="official-thaisot-server" />;
}
