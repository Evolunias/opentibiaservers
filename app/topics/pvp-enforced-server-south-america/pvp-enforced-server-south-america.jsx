import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-server-south-america');
}

export default function PvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-server-south-america" />;
}
