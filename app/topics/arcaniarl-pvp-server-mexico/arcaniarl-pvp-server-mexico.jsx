import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvp-server-mexico');
}

export default function ArcaniarlPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvp-server-mexico" />;
}
