import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-non-pvp-server-brazil');
}

export default function ArcaniarlNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-non-pvp-server-brazil" />;
}
