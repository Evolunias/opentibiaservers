import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvp-server-argentina');
}

export default function KasteriaPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvp-server-argentina" />;
}
