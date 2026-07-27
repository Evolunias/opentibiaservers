import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-14-non-pvp-server');
}

export default function Saintsot14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-14-non-pvp-server" />;
}
