import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-13-non-pvp-server');
}

export default function NtoStar13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-13-non-pvp-server" />;
}
