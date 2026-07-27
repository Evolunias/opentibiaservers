import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-1-non-pvp-server');
}

export default function NtoStar71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-1-non-pvp-server" />;
}
