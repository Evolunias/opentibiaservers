import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-0-non-pvp-server');
}

export default function NtoStar80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-0-non-pvp-server" />;
}
