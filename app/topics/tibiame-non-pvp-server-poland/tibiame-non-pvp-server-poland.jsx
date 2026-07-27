import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-non-pvp-server-poland');
}

export default function TibiameNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiame-non-pvp-server-poland" />;
}
