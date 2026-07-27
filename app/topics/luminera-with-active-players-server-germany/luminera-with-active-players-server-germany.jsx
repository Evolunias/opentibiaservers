import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-active-players-server-germany');
}

export default function LumineraWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-active-players-server-germany" />;
}
