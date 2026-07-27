import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-11-non-pvp-server');
}

export default function Kasteria11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-11-non-pvp-server" />;
}
