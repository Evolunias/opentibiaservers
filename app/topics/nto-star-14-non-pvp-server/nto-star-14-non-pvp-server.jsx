import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-14-non-pvp-server');
}

export default function NtoStar14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-14-non-pvp-server" />;
}
