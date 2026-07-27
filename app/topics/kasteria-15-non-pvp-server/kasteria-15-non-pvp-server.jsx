import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-15-non-pvp-server');
}

export default function Kasteria15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-15-non-pvp-server" />;
}
