import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-9-6-pvp-server');
}

export default function Saintsot96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-9-6-pvp-server" />;
}
