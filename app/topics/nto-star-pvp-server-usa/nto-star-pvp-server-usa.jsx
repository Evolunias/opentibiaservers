import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvp-server-usa');
}

export default function NtoStarPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvp-server-usa" />;
}
