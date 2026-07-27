import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-9-6-non-pvp-server');
}

export default function NtoStar96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-9-6-non-pvp-server" />;
}
