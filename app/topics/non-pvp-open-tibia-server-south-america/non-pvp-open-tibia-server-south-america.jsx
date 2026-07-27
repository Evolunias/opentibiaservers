import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-open-tibia-server-south-america');
}

export default function NonPvpOpenTibiaServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-open-tibia-server-south-america" />;
}
