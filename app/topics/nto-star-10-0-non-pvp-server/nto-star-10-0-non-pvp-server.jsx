import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-10-0-non-pvp-server');
}

export default function NtoStar100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-10-0-non-pvp-server" />;
}
