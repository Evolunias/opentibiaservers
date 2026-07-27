import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-retro-server-usa');
}

export default function TibiaraRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-retro-server-usa" />;
}
