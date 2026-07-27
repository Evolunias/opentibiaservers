import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-active-players-server-brazil');
}

export default function TibianusWithActivePlayersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-active-players-server-brazil" />;
}
