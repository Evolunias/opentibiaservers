import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tenebra-players');
}

export default function TenebraPlayersKeywordPage() {
  return <StaticKeywordPage slug="tenebra-players" />;
}
