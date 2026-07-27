import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-7-72-non-pvp-server');
}

export default function Saintsot772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-7-72-non-pvp-server" />;
}
