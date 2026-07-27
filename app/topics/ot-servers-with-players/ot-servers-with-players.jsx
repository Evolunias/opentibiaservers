import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-with-players');
}

export default function OtServersWithPlayersKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-with-players" />;
}
