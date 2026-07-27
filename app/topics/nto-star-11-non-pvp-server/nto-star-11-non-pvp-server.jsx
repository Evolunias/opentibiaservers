import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-11-non-pvp-server');
}

export default function NtoStar11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-11-non-pvp-server" />;
}
