import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-with-players');
}

export default function OpenTibiaServersWithPlayersKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-with-players" />;
}
