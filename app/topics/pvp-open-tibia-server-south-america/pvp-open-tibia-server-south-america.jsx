import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-open-tibia-server-south-america');
}

export default function PvpOpenTibiaServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-open-tibia-server-south-america" />;
}
