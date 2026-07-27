import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-4-non-pvp-server');
}

export default function NtoStar74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-4-non-pvp-server" />;
}
