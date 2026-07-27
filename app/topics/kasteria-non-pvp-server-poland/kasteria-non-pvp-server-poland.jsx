import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-non-pvp-server-poland');
}

export default function KasteriaNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="kasteria-non-pvp-server-poland" />;
}
