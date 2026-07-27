import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-active-players-server-germany');
}

export default function CyntaraWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-active-players-server-germany" />;
}
