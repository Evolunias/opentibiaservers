import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-retro-server-poland');
}

export default function TibiaraRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiara-retro-server-poland" />;
}
