import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvp-enforced-server-south-america');
}

export default function NostaltherPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvp-enforced-server-south-america" />;
}
