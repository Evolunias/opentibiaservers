import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-argentina-server');
}

export default function TibiaraArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-argentina-server" />;
}
