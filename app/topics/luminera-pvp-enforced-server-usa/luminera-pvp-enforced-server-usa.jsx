import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-enforced-server-usa');
}

export default function LumineraPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-enforced-server-usa" />;
}
