import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-active-players-server-usa');
}

export default function CyntaraWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-active-players-server-usa" />;
}
