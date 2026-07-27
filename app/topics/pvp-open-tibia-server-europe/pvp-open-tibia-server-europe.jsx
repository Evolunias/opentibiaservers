import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-open-tibia-server-europe');
}

export default function PvpOpenTibiaServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-open-tibia-server-europe" />;
}
