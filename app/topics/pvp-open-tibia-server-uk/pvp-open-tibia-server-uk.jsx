import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-open-tibia-server-uk');
}

export default function PvpOpenTibiaServerUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-open-tibia-server-uk" />;
}
