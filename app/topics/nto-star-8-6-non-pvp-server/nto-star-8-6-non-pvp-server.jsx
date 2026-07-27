import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-6-non-pvp-server');
}

export default function NtoStar86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-6-non-pvp-server" />;
}
