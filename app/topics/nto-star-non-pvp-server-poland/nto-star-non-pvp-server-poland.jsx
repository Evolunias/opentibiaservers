import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-non-pvp-server-poland');
}

export default function NtoStarNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nto-star-non-pvp-server-poland" />;
}
