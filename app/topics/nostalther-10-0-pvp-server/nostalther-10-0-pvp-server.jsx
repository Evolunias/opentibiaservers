import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-10-0-pvp-server');
}

export default function Nostalther100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-10-0-pvp-server" />;
}
