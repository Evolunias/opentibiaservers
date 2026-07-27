import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-12-non-pvp-server');
}

export default function NtoStar12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-12-non-pvp-server" />;
}
