import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-open-tibia-server-poland');
}

export default function PvpOpenTibiaServerPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-open-tibia-server-poland" />;
}
