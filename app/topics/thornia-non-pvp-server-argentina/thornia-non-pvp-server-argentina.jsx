import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-non-pvp-server-argentina');
}

export default function ThorniaNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thornia-non-pvp-server-argentina" />;
}
