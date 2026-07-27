import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvp-server-argentina');
}

export default function NtoStarPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvp-server-argentina" />;
}
