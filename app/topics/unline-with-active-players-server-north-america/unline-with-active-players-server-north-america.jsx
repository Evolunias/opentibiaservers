import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-with-active-players-server-north-america');
}

export default function UnlineWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-with-active-players-server-north-america" />;
}
