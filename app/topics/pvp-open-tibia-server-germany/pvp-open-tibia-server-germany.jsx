import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-open-tibia-server-germany');
}

export default function PvpOpenTibiaServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-open-tibia-server-germany" />;
}
