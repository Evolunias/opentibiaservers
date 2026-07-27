import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvp');
}

export default function ArcaniarlPvpKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvp" />;
}
