import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-14-pvp-server');
}

export default function NtoStar14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-14-pvp-server" />;
}
