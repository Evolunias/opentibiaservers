import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-non-pvp-server-germany');
}

export default function NtoStarNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nto-star-non-pvp-server-germany" />;
}
