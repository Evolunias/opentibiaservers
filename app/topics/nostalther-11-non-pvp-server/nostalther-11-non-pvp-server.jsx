import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-11-non-pvp-server');
}

export default function Nostalther11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-11-non-pvp-server" />;
}
