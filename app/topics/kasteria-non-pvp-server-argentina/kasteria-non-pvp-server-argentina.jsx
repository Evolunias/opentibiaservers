import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-non-pvp-server-argentina');
}

export default function KasteriaNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-non-pvp-server-argentina" />;
}
