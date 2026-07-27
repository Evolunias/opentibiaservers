import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-germany-server');
}

export default function TibiaraGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-germany-server" />;
}
