import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-enforced-server-germany');
}

export default function LumineraPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-enforced-server-germany" />;
}
