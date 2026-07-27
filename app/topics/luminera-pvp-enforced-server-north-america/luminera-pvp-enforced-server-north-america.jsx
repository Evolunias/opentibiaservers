import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-enforced-server-north-america');
}

export default function LumineraPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-enforced-server-north-america" />;
}
