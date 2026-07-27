import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-non-pvp-server-poland');
}

export default function ThorniaNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thornia-non-pvp-server-poland" />;
}
