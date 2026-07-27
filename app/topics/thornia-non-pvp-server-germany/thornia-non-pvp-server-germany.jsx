import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-non-pvp-server-germany');
}

export default function ThorniaNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thornia-non-pvp-server-germany" />;
}
