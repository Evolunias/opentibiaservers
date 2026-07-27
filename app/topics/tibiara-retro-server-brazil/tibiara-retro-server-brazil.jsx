import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-retro-server-brazil');
}

export default function TibiaraRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiara-retro-server-brazil" />;
}
