import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-servers-south-america');
}

export default function PvpEnforcedServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-servers-south-america" />;
}
