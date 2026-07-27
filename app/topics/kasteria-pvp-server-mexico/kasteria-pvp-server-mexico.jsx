import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvp-server-mexico');
}

export default function KasteriaPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvp-server-mexico" />;
}
