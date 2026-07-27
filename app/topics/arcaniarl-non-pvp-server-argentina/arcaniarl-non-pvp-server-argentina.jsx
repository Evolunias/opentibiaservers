import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-non-pvp-server-argentina');
}

export default function ArcaniarlNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-non-pvp-server-argentina" />;
}
