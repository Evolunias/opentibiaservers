import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-12-pvp-server');
}

export default function NtoStar12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-12-pvp-server" />;
}
