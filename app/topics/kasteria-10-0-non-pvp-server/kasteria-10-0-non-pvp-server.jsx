import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-10-0-non-pvp-server');
}

export default function Kasteria100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-10-0-non-pvp-server" />;
}
