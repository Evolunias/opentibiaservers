import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-4-pvp-server');
}

export default function Kasteria74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-4-pvp-server" />;
}
