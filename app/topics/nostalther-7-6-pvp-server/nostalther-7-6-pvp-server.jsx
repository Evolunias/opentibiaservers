import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-6-pvp-server');
}

export default function Nostalther76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-6-pvp-server" />;
}
