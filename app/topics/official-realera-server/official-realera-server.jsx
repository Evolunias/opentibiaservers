import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realera-server');
}

export default function OfficialRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="official-realera-server" />;
}
