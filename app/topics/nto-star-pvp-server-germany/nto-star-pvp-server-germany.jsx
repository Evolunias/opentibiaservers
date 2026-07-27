import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvp-server-germany');
}

export default function NtoStarPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvp-server-germany" />;
}
