import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-non-pvp-server-poland');
}

export default function TibiaraNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiara-non-pvp-server-poland" />;
}
