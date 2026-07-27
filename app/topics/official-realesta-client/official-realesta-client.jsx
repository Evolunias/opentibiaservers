import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realesta-client');
}

export default function OfficialRealestaClientKeywordPage() {
  return <StaticKeywordPage slug="official-realesta-client" />;
}
