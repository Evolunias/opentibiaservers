import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-10-0-pvp-server');
}

export default function NtoStar100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-10-0-pvp-server" />;
}
