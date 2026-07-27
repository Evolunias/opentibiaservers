import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-non-pvp-server-mexico');
}

export default function ThorniaNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thornia-non-pvp-server-mexico" />;
}
