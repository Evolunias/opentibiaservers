import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvp-server-mexico');
}

export default function NtoStarPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvp-server-mexico" />;
}
