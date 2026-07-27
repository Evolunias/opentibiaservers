import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-enforced-server-argentina');
}

export default function LumineraPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-enforced-server-argentina" />;
}
