import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvp-server-brazil');
}

export default function ArcaniarlPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvp-server-brazil" />;
}
