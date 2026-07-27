import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-client-south-america');
}

export default function PvpEnforcedClientSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-client-south-america" />;
}
