import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-non-pvp-server-argentina');
}

export default function NtoStarNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-non-pvp-server-argentina" />;
}
