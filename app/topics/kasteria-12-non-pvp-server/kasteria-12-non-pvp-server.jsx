import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-12-non-pvp-server');
}

export default function Kasteria12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-12-non-pvp-server" />;
}
