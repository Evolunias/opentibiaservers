import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-active-players-server-europe');
}

export default function CyntaraWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-active-players-server-europe" />;
}
