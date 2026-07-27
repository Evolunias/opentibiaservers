import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-non-pvp-server-mexico');
}

export default function ArcaniarlNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-non-pvp-server-mexico" />;
}
