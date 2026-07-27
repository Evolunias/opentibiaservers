import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-0-pvp-server');
}

export default function NtoStar80PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-0-pvp-server" />;
}
