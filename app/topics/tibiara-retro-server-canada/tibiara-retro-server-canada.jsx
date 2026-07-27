import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-retro-server-canada');
}

export default function TibiaraRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-retro-server-canada" />;
}
