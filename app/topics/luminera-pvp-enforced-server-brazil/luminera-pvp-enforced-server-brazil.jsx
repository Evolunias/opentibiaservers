import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-enforced-server-brazil');
}

export default function LumineraPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-enforced-server-brazil" />;
}
