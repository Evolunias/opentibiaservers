import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-non-pvp-server-usa');
}

export default function NtoStarNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-non-pvp-server-usa" />;
}
