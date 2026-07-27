import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-open-tibia-server-canada');
}

export default function PvpOpenTibiaServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-open-tibia-server-canada" />;
}
