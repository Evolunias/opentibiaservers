import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-4-non-pvp-server');
}

export default function Nostalther74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-4-non-pvp-server" />;
}
