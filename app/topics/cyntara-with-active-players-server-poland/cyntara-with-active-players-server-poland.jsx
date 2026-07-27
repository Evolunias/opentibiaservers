import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-active-players-server-poland');
}

export default function CyntaraWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-active-players-server-poland" />;
}
