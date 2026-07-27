import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-tibia-private-server-south-america');
}

export default function PvpTibiaPrivateServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-tibia-private-server-south-america" />;
}
