import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-10-98-non-pvp-server');
}

export default function Kasteria1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-10-98-non-pvp-server" />;
}
