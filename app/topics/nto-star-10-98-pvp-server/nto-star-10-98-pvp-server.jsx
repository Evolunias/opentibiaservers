import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-10-98-pvp-server');
}

export default function NtoStar1098PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-10-98-pvp-server" />;
}
