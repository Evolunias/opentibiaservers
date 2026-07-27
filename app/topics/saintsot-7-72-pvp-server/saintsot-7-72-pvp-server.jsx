import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-7-72-pvp-server');
}

export default function Saintsot772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-7-72-pvp-server" />;
}
