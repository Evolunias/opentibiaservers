import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-retro-server-uk');
}

export default function TibiaraRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiara-retro-server-uk" />;
}
