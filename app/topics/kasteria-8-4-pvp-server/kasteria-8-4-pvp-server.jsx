import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-4-pvp-server');
}

export default function Kasteria84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-4-pvp-server" />;
}
