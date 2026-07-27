import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-active-players-server-poland');
}

export default function TibianusWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-active-players-server-poland" />;
}
