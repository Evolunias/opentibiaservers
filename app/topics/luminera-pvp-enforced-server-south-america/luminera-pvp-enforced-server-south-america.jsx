import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-enforced-server-south-america');
}

export default function LumineraPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-enforced-server-south-america" />;
}
