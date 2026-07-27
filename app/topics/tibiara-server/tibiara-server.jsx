import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-server');
}

export default function TibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-server" />;
}
