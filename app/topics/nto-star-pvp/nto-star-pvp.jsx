import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvp');
}

export default function NtoStarPvpKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvp" />;
}
