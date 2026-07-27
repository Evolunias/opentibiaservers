import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-0-pvp-server');
}

export default function Nostalther80PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-0-pvp-server" />;
}
