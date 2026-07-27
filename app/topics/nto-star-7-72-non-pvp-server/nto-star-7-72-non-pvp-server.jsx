import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-72-non-pvp-server');
}

export default function NtoStar772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-72-non-pvp-server" />;
}
