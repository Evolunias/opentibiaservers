import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-active-players-server-north-america');
}

export default function CyntaraWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-active-players-server-north-america" />;
}
