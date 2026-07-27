import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-1-non-pvp-server');
}

export default function NtoStar81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-1-non-pvp-server" />;
}
