import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-retro-server-north-america');
}

export default function TibiaraRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-retro-server-north-america" />;
}
