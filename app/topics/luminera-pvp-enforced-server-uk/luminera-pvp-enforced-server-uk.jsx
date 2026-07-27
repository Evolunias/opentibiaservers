import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-enforced-server-uk');
}

export default function LumineraPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-enforced-server-uk" />;
}
