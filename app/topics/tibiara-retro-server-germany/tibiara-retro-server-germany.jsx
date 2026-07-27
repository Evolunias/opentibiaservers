import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-retro-server-germany');
}

export default function TibiaraRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiara-retro-server-germany" />;
}
