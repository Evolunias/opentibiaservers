import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-active-players-server-north-america');
}

export default function ShadowcoresWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-active-players-server-north-america" />;
}
