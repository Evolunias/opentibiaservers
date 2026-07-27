import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-tibia-private-server-south-america');
}

export default function NonPvpTibiaPrivateServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-tibia-private-server-south-america" />;
}
