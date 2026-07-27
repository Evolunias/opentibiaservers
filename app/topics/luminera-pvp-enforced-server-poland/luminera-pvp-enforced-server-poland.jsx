import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-enforced-server-poland');
}

export default function LumineraPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-enforced-server-poland" />;
}
