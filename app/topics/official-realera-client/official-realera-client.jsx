import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realera-client');
}

export default function OfficialRealeraClientKeywordPage() {
  return <StaticKeywordPage slug="official-realera-client" />;
}
