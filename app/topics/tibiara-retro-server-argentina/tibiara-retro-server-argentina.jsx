import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-retro-server-argentina');
}

export default function TibiaraRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-retro-server-argentina" />;
}
