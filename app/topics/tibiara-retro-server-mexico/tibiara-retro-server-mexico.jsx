import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-retro-server-mexico');
}

export default function TibiaraRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiara-retro-server-mexico" />;
}
