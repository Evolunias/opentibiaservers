import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-chile-server');
}

export default function TibiaraChileServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-chile-server" />;
}
