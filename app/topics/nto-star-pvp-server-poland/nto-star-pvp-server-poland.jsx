import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvp-server-poland');
}

export default function NtoStarPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvp-server-poland" />;
}
